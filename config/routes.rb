Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'
  # Other routes if needed
end
