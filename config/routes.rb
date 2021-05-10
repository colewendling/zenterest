Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update, :destroy] do
      resources :boards, only: [:index]
      resources :pins, only: [:index]
    end
    resources :users, only: [:create, :index, :show, :update, :destroy]
    resources :boards, only: [:create, :edit, :update, :destroy, :show]
    resources :pins, only: [:create, :edit, :update, :destroy, :show, :index]
    resource :session, only: [:create, :destroy]
  end
end
