function getItems(details) {



    axios
        .get(
            'https://api.mocki.io/v1/d6c80411/item-details',
        ) // link to request data 

        .then(function (response) {
            fetchedResults = response.data.item;
            // handle success
            console.log(fetchedResults);
            let output = "";



            $.each(fetchedResults, (index, itemDetail) => {




                output += `


                <div class="template">
                     <div class="listing-image">
                            <img src="${itemDetail.image}" alt="" srcset="" width="150px" height="120px">
                    </div>
                    <div class="listing-below-section">
                        <div class="listing-name-details">
                            <span class="item-name">
                                    ${itemDetail.name}
                            </span>
                            <span class="item-price">
                                    ${itemDetail.price}₹
                            </span>

                     </div>
                    <div class="listing-add">
                        <img src="assets/add-btn.png" alt="" srcset="" height="28" width="28" class="add-item" id="id-add-item">    
                    </div>
                </div>
                </div>
          
          `;
                $("#item-listing").html(output);

            })
        })
        .catch(function (error) {
            // handle error
            console.log(error)
        })
        .then(function () {
            // always executed
        })



}

getItems("a");