new Autocomplete("checkbox", {


  classGroup : "group-by",
  insertToInput: true,
  // insertToInput: true,
  // prevents results from hiding after
  // clicking on an item from the list
  disableCloseOnSelect: true,
  howManyCharacters : 0,

  onSearch: ({ currentValue }) => {
    const api = "./proteins.json";
    return new Promise((resolve) => {
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          // first, we sort by our group, in our case
          // it will be the activity, then we sort by name
          // of course, it is not always necessary because
          // such sorting may be obtained from REST API
          const result = data
            .sort((a, b) => a.activity.localeCompare(b.activity) || a.name.localeCompare(b.name)
            )
            .filter((element) => {
              return element.name.match(new RegExp(currentValue, "gi"));
            });
          resolve(result);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  },

  onResults: ({ matches, template, classGroup }) => {

    function count(activity) {
      let count = {};
      matches.map((el) => {
        count[el.activity] = (count[el.activity] || 0) + 1;
      });
      return `<small>${count[activity]} items</small>`;
    }

    return matches === 0
      ? template
      : matches
          .map((el, index, array) => {
            // we create an element of the group
            let group =
              el.activity !== array[index - 1]?.activity
                ? `<li class="${classGroup}"><span>${el.activity}</span> ${count(
                    el.activity
                  )}</li>`
                : "";

            return `
            ${group}
            <li class="custom-element">
              <label>
                <input type="checkbox" value="${el.name}">
                <div class="checkbox">${el.name}</div>
              </label>
            </li>`;
          })
          .join("");
  },

  onOpened: ({ type, element, results }) => {
    // if the elements from the 'array' are identical to those
    // from the rendered elements add the 'selected' class


    [].slice.call(results.children).map((item, idx) => {
      const test = checkbox.some(
        (element) => element === item.textContent.trim()
      );

      if (!test) return;


      let inputElement = results.children[idx].firstElementChild.children[0];
      inputElement.checked = true;
      inputElement
        .closest(".custom-element")
        .classList.add("checkbox-selected");
    });
  },

  onSubmit: ({ index, element, object, results }) => {

    let true_elements = results.getElementsByClassName("custom-element")


    // update counter elements
    function countNumber(numb) {
      return (countNumberCheckbox.textContent = numb);
    }

    // remove element from array
    function removeItemFromArray(el) {
      let index = checkbox.indexOf(el);
      if (index > -1) {
        checkbox.splice(index, 1);
      }
    }

    function addRemoveClass(type) {
      inputElement
        .closest(".custom-element")
        .classList[type]("checkbox-selected");
      // set false checkbox
      inputElement.checked = type === "remove" ? false : true;
    }

    let inputElement = true_elements[index].firstElementChild.children[0];

    if (inputElement.checked) {
      // remove class
      addRemoveClass("remove");

      // remove from array object
      removeItemFromArray(element.value);

      // update counter div
      countNumber(checkbox.length);

      // remove button
      [].slice.call(selectedItem.children).map((item) => {
        if (item.textContent.trim() === element.value) {
          item.parentNode.removeChild(item);
        }
      });

      return;
    }

    // set checkbox on true and add class
    addRemoveClass("add");

    // add the selected item to the array
    checkbox.push(element.value);

    // create elements with names and buttons
    const button = document.createElement("button");
    button.type = "button";
    button.className = "remove-item";
    button.insertAdjacentHTML(
      "beforeend",
      '<svg aria-label="Remove name" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"/></svg>'
    );

    const item = document.createElement("div");
    item.className = "item";

    // add each item in the array to the div selectedItem
    checkbox.map((ele) => {
      item.textContent = ele;
      item.insertAdjacentElement("beforeend", button);
      selectedItem.appendChild(item);
    });

    // update number count
    countNumber(checkbox.length);

    // remove selected element
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const element = e.target.closest(".item");

      // remove from array object
      removeItemFromArray(element.textContent);

      // update checkbox
      [].slice.call(results.getElementsByClassName("custom-element")).map((item, idx) => {
        let inputElement = results.getElementsByClassName("custom-element")[idx].firstElementChild.children[0];
        inputElement.checked = false;
        addRemoveClass("remove");
      });

      // update number count
      countNumber(checkbox.length);

      // remove element from div
      const parentElement = button.parentNode;
      parentElement.parentNode.removeChild(parentElement);
    });
  },

  onReset: (element) => {
    selectedItem.textContent = "";
    // after clicking the 'x' button,
    // clear the table
    checkbox = [];

    // remove count number
    countNumberCheckbox.textContent = 0;
  },

  noResults: ({ element, template }) =>
    template(`<li>No results found: "${element.value}"</li>`),
});

