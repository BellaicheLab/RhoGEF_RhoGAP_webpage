// Selected items
let checkbox = [];

let proteins_links = {
                        
                        "Cdep":{
                            "url" : "https://flybase.org/reports/FBgn0265082",
							"notum":{
							    "signal":["3"],
                                "pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
					  		 	"phase":{"Interphase":['1', '2'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":['1'], "Late cytokinesis": ['1'],"Movie": []}
                            },
                            "fe":{
                                "signal":["3"],
                                "pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
                                "green":[],
                                "phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":["1"],"Late cytokinesis":["1", "2"], "Movie":[]}
                            }
                        },

						"CG15611":{
							"url" : "https://flybase.org/reports/FBgn0034194",
                            "notum":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"CG30440":{
							"url" : "https://flybase.org/reports/FBgn0050440",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ["1"],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"CG42674":{
							"url" : "https://flybase.org/reports/FBgn0261556",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"CG43102":{
							"url" : "https://flybase.org/reports/FBgn0262562",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1', '2'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ['1', '2'],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"CG43658":{
							"url" : "https://flybase.org/reports/FBgn0263706",
							"notum":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"CG46491":{
							"url" : "https://flybase.org/reports/FBgn0287631",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["3"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":["1","2"], "Anaphase":["1"], "Early cytokinesis":[],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"Cysts":{
							"url" : "https://flybase.org/reports/FBgn0032796",
							"notum":{
								"signal":["3"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":['1'], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":["1"],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"Exn":{
							"url" : "https://flybase.org/reports/FBgn0261547",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":['1'], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"GEFmeso":{
							"url" : "https://flybase.org/reports/FBgn0050115",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":["1"],"Late cytokinesis":["1", "2"], "Movie":[]}
								}
						},

						"Mbc":{
							"url" : "https://flybase.org/reports/FBgn0015513",
							"notum":{
								"signal":["3"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":['1'], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":["1"], "Early cytokinesis":[],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"Pbl":{
							"url" : "https://flybase.org/reports/FBgn0003041",
							"notum":{
								"signal":["3"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":['1'], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["3"],
								"pink":["Nup107:RFP", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["2"], "Prophase":[], "Metaphase":[], "Anaphase":["1"], "Early cytokinesis":["1"],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"PsGEF":{
							"url" : "https://flybase.org/reports/FBgn0264598",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"Pura (CG33275)":{
							"url" : "https://flybase.org/reports/FBgn0035802",
							"notum":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RhoGEF2":{
							"url" : "https://flybase.org/reports/FBgn0023172",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":["1"], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ["1"],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RhoGEF3":{
							"url" : "https://flybase.org/reports/FBgn0264707",
					  		 		"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'],"Interphase (BAC)":['1'], "Prophase":["1"], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["1"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RhoGEF4":{
							"url" : "https://flybase.org/reports/FBgn0035761",
							"notum":{
								"signal":["3"],
								"pink":["Lamin:TagRFP", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":['1'], "Anaphase":[], "Early cytokinesis":['1'], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["Nup107:RFP", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":["1"],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"RhoGEF64C":{
							"url" : "https://flybase.org/reports/FBgn0035574",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":['1'], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RtGEF":{
							"url" : "https://flybase.org/reports/FBgn0015803",
							"notum":{
								"signal":["3"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":["1", "2", "3"], "Movie":[]}
								}
						},

						"Sif":{
							"url" : "https://flybase.org/reports/FBgn0085447",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"Sos":{
							"url" : "https://flybase.org/reports/FBgn0001965",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ["1"],"Movie": []}
							},
							"fe":{
								"signal":["1"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"spg":{
							"url" : "https://flybase.org/reports/FBgn0264324",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ["1"],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"Trio":{
							"url" : "https://flybase.org/reports/FBgn0024277",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":["1"], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["1"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"Vav":{
							"url" : "https://flybase.org/reports/FBgn0040068",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":['1'], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"Zir":{
							"url" : "https://flybase.org/reports/FBgn0031216",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":['1', '2'], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"Ziz":{
							"url" : "https://flybase.org/reports/FBgn0260486",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":['1', '2'], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["3"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":["1"],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"CdGAPr":{
							"url" : "https://flybase.org/reports/FBgn0032821",
							"notum":{
								"signal":["3"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1', '2'], "Prophase":[], "Metaphase":['1'], "Anaphase":[], "Early cytokinesis":['1'], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":["1"],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"conu":{
							"url" : "https://flybase.org/reports/FBgn0039994",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":["1"], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":["1"],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"cv-c":{
							"url" : "https://flybase.org/reports/FBgn0285955",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ["1"],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"Graf":{
							"url" : "https://flybase.org/reports/FBgn0030685",
							"notum":{
								"signal":["3"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":['1'], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["3"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Ring canal formation":["1"], "Movie":[]}
								}
						},

						"OCRL":{
							"url" : "https://flybase.org/reports/FBgn0023508",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["1"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":["1"], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"RacGAP84C":{
							"url" : "https://flybase.org/reports/FBgn0045843",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ["1"],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RhoGAP100F":{
							"url" : "https://flybase.org/reports/FBgn0039883",
							"notum":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RhoGAP102A":{
							"url" : "https://flybase.org/reports/FBgn0259216",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RhoGAP15B":{
							"url" : "https://flybase.org/reports/FBgn0030808",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Interphase (BAC)":[1],  "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["3"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"RhoGAP16F":{
							"url" : "https://flybase.org/reports/FBgn0030893",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RhoGAP18B":{
							"url" : "https://flybase.org/reports/FBgn0261461",
							"notum":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RhoGAP19D":{
							"url" : "https://flybase.org/reports/FBgn0031118",
							"notum":{
								"signal":["3"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1', '2'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["3"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RhoGAP1A":{
							"url" : "https://flybase.org/reports/FBgn0025836",
							"notum":{
								"signal":["3"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":['1'], "Metaphase":['1', '2'], "Anaphase":[], "Early cytokinesis":['1', '2'], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["3"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"RhoGAP54D":{
							"url" : "https://flybase.org/reports/FBgn0034249",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1', '2'], "Prophase":[], "Metaphase":['1'], "Anaphase":['1'], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["Nup107:RFP", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":["1"],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"RhoGAP5A":{
							"url" : "https://flybase.org/reports/FBgn0029778",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"RhoGAP68F":{
							"url" : "https://flybase.org/reports/FBgn0036257",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "Spd2:RFP", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":['1'], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":["1"], "Movie":[]}
								}
						},

						"RhoGAP71E":{
							"url" : "https://flybase.org/reports/FBgn0036518",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["0"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":[], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RhoGAP92B":{
							"url" : "https://flybase.org/reports/FBgn0038747",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": ["1"],"Movie": []}
							},
							"fe":{
								"signal":["1"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RhoGAP93B":{
							"url" : "https://flybase.org/reports/FBgn0038853",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["1"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"RhoGAPp190":{
							"url" : "https://flybase.org/reports/FBgn0026375",
							"notum":{
								"signal":["1"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":["1"], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["2"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
                                								
								}
						},

						"Rlip":{
							"url" : "https://flybase.org/reports/FBgn0026056",
							"notum":{
								"signal":["2"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":['1'], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[], "Late cytokinesis": [],"Movie": []}
							},
							"fe":{
								"signal":["1"],
								"pink":["", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":["1"], "Metaphase":[], "Anaphase":[], "Early cytokinesis":[],"Late cytokinesis":[], "Movie":[]}
								}
						},

						"Tum":{
							"url" : "https://flybase.org/reports/FBgn0086356",
							"notum":{
								"signal":["3"],
								"pink":["MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"phase":{"Interphase":['1'], "Prophase":[], "Metaphase":['1','2'], "Anaphase":[], "Early cytokinesis":['1'], "Late cytokinesis": ['1'],"Movie": []}
							},
							"fe":{
								"signal":["3"],
								"pink":["Cell Membrane Marker", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2", "MyoII:3xmKate2"],
								"green":[],
								"phase":{"Interphase":["1"], "Prophase":[], "Metaphase":["1"], "Anaphase":["1"], "Early cytokinesis":["1"],"Late cytokinesis":["1"], "Movie":[]}
								}
                        }
                    }

var intensity2color = {
                        "0":"#F7F7F7",
                        "1":"#C4D7B1",
                        "2":"#9FCE63",
                        "3":"#4DA858",
}
                    
// Number of items checked
const countNumberCheckbox = document.querySelector(".count-number-checkbox");

// Tags of selected items
const selectedItem = document.querySelector(".selected-item-checkbox");

// Window to select stuf
const selectItem = document.querySelector(".search-element")

// Table of elements to display
const table = document.querySelector("#result-table")

