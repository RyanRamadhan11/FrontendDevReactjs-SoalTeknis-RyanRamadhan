const fetchRestaurantDetail = (restaurantId) => {
    fetch(`https://restaurant-api.dicoding.dev/detail/${restaurantId}`)
      .then(response => response.json())
      .then(data => {
        setModalData(data.restaurant);
        // Menampilkan modal dengan SweetAlert
        Swal.fire({
          title: data.restaurant.name,
          html: `
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6">
                  <img class="img-fluid mb-3" src="https://restaurant-api.dicoding.dev/images/small/${data.restaurant.pictureId}" alt="Restaurant" />
                  <p><strong>Rating:</strong> ${data.restaurant.rating}</p>
                  <p><strong>Description:</strong> ${data.restaurant.description}</p>
                  <p><strong>City:</strong> ${data.restaurant.city}</p>
                  <p><strong>Address:</strong> ${data.restaurant.address}</p>
                  <p><strong>Categories:</strong> ${data.restaurant.categories.map(category => category.name).join(', ')}</p>
                </div>
                <div class="col-md-6">
                  <h2>Menus</h2>
                  <p><strong>Foods:</strong> ${data.restaurant.menus.foods.map(food => food.name).join(', ')}</p>
                  <p><strong>Drinks:</strong> ${data.restaurant.menus.drinks.map(drink => drink.name).join(', ')}</p>
                  <h2>Reviews</h2>
                  ${data.restaurant.customerReviews.map(review => `
                    <div class="border rounded p-3 mb-3">
                      <p><strong>Name:</strong> ${review.name}</p>
                      <p><strong>Review:</strong> ${review.review}</p>
                      <p><strong>Date:</strong> ${review.date}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          `,
          showCancelButton: true,
          confirmButtonText: 'Close',
          cancelButtonText: 'Add to Favorites',
          customClass: {
            container: 'my-swal-container',
          },
        });
      })
      .catch(error => console.error('Error fetching restaurant detail:', error));
  };
  