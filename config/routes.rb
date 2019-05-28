Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
     namespace :v1 do
       resources :notes
     end
   end

   namespace :api do
      namespace :v1 do
        resources :teachers, only: [:index, :show]
      end
    end

    namespace :api do
       namespace :v1 do
         resources :students, only: [:index, :show]
       end
     end





end
