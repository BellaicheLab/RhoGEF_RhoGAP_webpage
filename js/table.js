
function update_table(){

    let notum_selected = document.querySelector("#notum-checkbox").checked;
    let fe_selected = document.querySelector("#follicular-checkbox").checked;

    function erase_cells(){

        rows = document.querySelectorAll('.content-table');
        rows.forEach(row => {
          row.remove();
        });
    }

    function create_cells(){

        function get_non_empty(dict){

            var categories = [];
            var raw_categories = Object.keys(dict)

            for(let i=0; i<raw_categories.length;i++){

                if(dict[raw_categories[i]].length > 0){
                    categories.push(raw_categories[i]);
                }
            }
            return categories;
        }

    function fill_cells(categories, phases, tissue_name, i){
        for (let j=0;j<categories.length;j++){

               stage_image = (categories[j].toLowerCase().replaceAll(' ',''));

                // Create categories
                cellCategory = rowTitle.insertCell()
                cellCategory.style.padding = "0.5em"
                cellCategory.innerHTML = `<th style="padding:5px" class="subcategory" scope="col">${categories[j]}</th>`

                // Create legends
                cellLeg = rowLegend.insertCell();
                cellLeg.innerHTML = `<div style="auto; width: 100%">
                                     <p style="color: #EC3AF9; font-size:15px;">${protein[tissue_name]["pink"][j]}</p>
                                     <p style="color: #3D9245; font-size:15px;">${checkbox[i]}:GFP </p>
                                    </div>`

                if (categories[j] != "Movie"){

                        html_top = ``
                        html_bot = ``

                    for(let k=0;k<phases[categories[j]].length;k++){
                        console.log(checkbox[i]+"_"+stage_image+"_"+phases[categories[j]][k]+"_top.png");
                        html_top += `<div style="margin: 0; display:table-cell;">
                                           <img class="fit-picture"
                                           src="./images/${tissue_name}/${checkbox[i]}_${stage_image}_${phases[categories[j]][k]}_top.png"
                                           width="150px" height="150px">
                                        </div>`



                        html_bot += `<div style="margin: 0 auto; display:table-cell">
                                           <img class="fit-picture"
                                           src="./images/${tissue_name}/${checkbox[i]}_${stage_image}_${phases[categories[j]][k]}_bot.png"
                                           onerror="this.style.display='none'"
                                           width="150px" height="150px">
                                        </div>`
                     }
                }
                else{

                    html_top = `<div style="margin: 0 auto; width: 100%">
                                       <img class="fit-picture"
                                       src="./images/${tissue_name}/${phases[categories[j]][0]}_top.gif"
                                       onerror="this.style.display='none'"
                                       width="200px" height="200px">
                                    </div>`

                    html_bot = `<div style="margin: 0 auto; width: 100%">
                                       <img class="fit-picture"
                                       src="./images/${tissue_name}/${phases[categories[j]][0]}_bot.gif"
                                       width="200px" height="200px">
                                    </div>`
                }

                // Creates images
                cellTop = row1.insertCell()
                cellTop.innerHTML = html_top

                cellBot = row2.insertCell()
                cellBot.innerHTML = html_bot
            }
    }

        // You get reference of the DOM object where you want to output thet tables
        var tables_content = document.getElementById('results-table');

        // For all proteins selected
        for (let i=0; i<checkbox.length; i++){

            // You create a table
            var table_html = `<table id="content-table-${checkbox[i]}" class="content-table">
                                <tbody>
                                </tbody>
                              </table>
                             `

            // You add the table do the DOM object
            tables_content.insertAdjacentHTML("beforeend", table_html);

            // Reference of the newly created table
            var tbodyRef = document.getElementById('content-table-'+checkbox[i]).getElementsByTagName('tbody')[0];

            // List of proteins selected
            protein = proteins_links[checkbox[i]];
            colorSignal_notum = intensity2color[protein["notum"]["signal"]];
            colorSignal_fe = intensity2color[protein["fe"]["signal"]];

            console.log(colorSignal_fe);

            // Get the categories with images for the gene
            phases_notum = protein["notum"]["phase"];
            phases_fe = protein["fe"]["phase"]

            categories_notum = get_non_empty(phases_notum);
            categories_fe = get_non_empty(phases_fe);

            // Create the rows
            var rowTissue = tbodyRef.insertRow();
            var rowTitle = tbodyRef.insertRow();
            var rowLegend = tbodyRef.insertRow();

            var row1 = tbodyRef.insertRow();
            var row2 = tbodyRef.insertRow();

            var rowSignalInt = tbodyRef.insertRow();

            // First create the tissue row with nothing
            cellTissue_none = rowTissue.insertCell();
            cellSignal_none = rowSignalInt.insertCell();

            // Then the cell stages
            rowTitle.classList.add("subcategory");
            cellTitle_none = rowTitle.insertCell()
            cellTitle_none.innerHTML = `<th class="subcategory" scope="col"></th>`

            // Create name
            cellName = rowLegend.insertCell()
            cellName.rowSpan = "3";
            cellName.width = "150px"
            cellName.innerHTML = `<a href="${protein['url']}" target="_blank">${checkbox[i]}</a>`;

            // If there are notum images
            if (notum_selected == true && categories_notum.length != 0){

                // Create the notum column
                cellTissue_notum = rowTissue.insertCell();
                cellTissue_notum.style.padding = "10px 0px 10px 0px";
                cellTissue_notum.innerHTML = `<th style="text-align:center;" class="subcategory" scope="col">Notum</th>`
                cellTissue_notum.colSpan = categories_notum.length;

                // Create its signal intensity
                cellSignal_notum = rowSignalInt.insertCell();
                cellSignal_notum.innerHTML = `<th style="text-align:center; float:left; padding:10px;" class="subcategory" scope="col">
                                                <div style="float:left; padding:20px;line-height: 0px"">
                                                    Intensity:
                                                </div>
                                                <div style="background-color:${colorSignal_notum}; width:60px;height:25px;border:1px solid #000; float:left;margin: 10px;line-height: 38px";vertical-align: sub;"></div>
                                              </th>`
                cellSignal_notum.colSpan = categories_notum.length;

                // Fill the table in the notum column
                fill_cells(categories_notum, phases_notum, "notum", i);


            }

            // If there are notum and fe images
            if ((notum_selected ==true && fe_selected==true) && (categories_notum.length!=0 && categories_fe.length!=0)){
                // Add a spacer for that whole column
                cellTissue = rowTissue.insertCell();
                cellTissue.setAttribute('class', 'spacer-cell');
                cellTissue.innerHTML = `<div class="spacer";> </div>`

                cellSignal = rowSignalInt.insertCell();
                cellSignal.setAttribute('class', 'spacer-cell');
                cellSignal.innerHTML = `<div class="spacer";> </div>`

                cellCategory = rowTitle.insertCell()
                cellCategory.innerHTML = `<div class="spacer";> </div>`
                cellCategory.setAttribute('class', 'spacer-cell');
                //cellCategory.style.backgroundColor="#DADADA";

                cellLeg = rowLegend.insertCell();
                cellLeg.innerHTML = `<div class="spacer";> </div>`
                cellLeg.setAttribute('class', 'spacer-cell');
                //cellLeg.style.backgroundColor="#DADADA";

                cellTop = row1.insertCell()
                cellTop.innerHTML = `<div class="spacer";> </div>`
                cellTop.setAttribute('class', 'spacer-cell');
                //cellTop.style.backgroundColor="#DADADA";

                cellBot = row2.insertCell()
                cellBot.innerHTML = `<div class="spacer";> </div>`
                cellBot.setAttribute('class', 'spacer-cell');
                //cellBot.style.backgroundColor="#DADADA";
            }

            // If there are FE selected
            if (fe_selected == true && categories_fe.length != 0){
            cellTissue_fe = rowTissue.insertCell()
            cellTissue_fe.colSpan = categories_fe.length
            cellTissue_fe.innerHTML = `<th style="text-align:center" class="subcategory" scope="col">Follicular epithelium</th>`

            cellSignal_fe = rowSignalInt.insertCell();
            cellSignal_fe.innerHTML = `<th style="text-align:center; float:left; padding:10px;" class="subcategory" scope="col">
                                                <div style="float:left; padding:20px;line-height: 0px"">
                                                    Intensity:
                                                </div>
                                                <div style="background-color:${colorSignal_fe}; width:60px;height:25px;border:1px solid #000; float:left;margin: 10px;line-height: 38px";vertical-align: sub;"></div>
                                              </th>`
            cellSignal_fe.colSpan = categories_notum.length;

            fill_cells(categories_fe, phases_fe, "fe", i)
            }






            rowTitle.classList.add("row")
            rowLegend.classList.add("row");
            row1.classList.add("row");
            row2.classList.add("row");
        }
    }
    //create_cells();
    erase_cells();
    create_cells();
}


selectItem.addEventListener("click", update_table);


