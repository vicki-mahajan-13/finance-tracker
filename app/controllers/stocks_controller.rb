class StocksController < ApplicationController
  def search
    @stock_symbol = params[:stock]
    # Just to ensure it hits this action
    render plain: "Search action hit: #{@stock_symbol}"
  end
end
