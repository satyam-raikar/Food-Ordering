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
                            <div class="generate-category-listing">
                                <div class="card">
                                    <div class="category-card">
                                        <img src="${itemDetail.image}" alt="" srcset="" height="70" width="70">
                                    
                                        <br>
                                        <span class="item-price" > ${itemDetail.category}</span>
                                    
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