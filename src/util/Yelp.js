const apiKey = '0SlaNqznE5CS4cCnFvmZs950dBNYsi_cS1md4EpVpmcaIA3XRfawjA_KyTeEIBuXTKA2NDdSBQMp5iMgJVde5EvB6gcg1xirteB1qQZ60AdeAax09VhkzwAfvvdWX3Yx';

//This object will store the functionality needed to interact with the Yelp API.
const Yelp = {
    search(term,location,sortBy){

        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers : {
                Authorization : `Bearer ${apiKey}`
            }
            
        }
            
        ).then(response =>{
            console.log(response.json);
            return response.json();
           
            
        }).then(jsonResponse=>{
            
            if(jsonResponse.businesses){
                console.log(jsonResponse.businesses);
                return jsonResponse.businesses.map(business=>{
                    return {
                        id : business.id,
                        imageSrc: business.image_url,
                        name : business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode:business.location.zip_code,
                        category: business.categories[0].alias,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        })
    

    }
};

export default Yelp;