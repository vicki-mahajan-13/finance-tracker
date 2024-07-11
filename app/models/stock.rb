# app/models/stock.rb
class Stock < ApplicationRecord
  def self.new_lookup(ticker_symbol)
    client = AlphavantageClient.new(Rails.application.credentials.alphavantage_client[:sandbox_api_key])
    latest_price = client.latest_price(ticker_symbol)
    latest_price
  end
end
