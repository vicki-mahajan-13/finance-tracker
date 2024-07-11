# app/models/stock.rb
class Stock < ApplicationRecord
  def self.new_lookup(ticker_symbol)
    client = AlphavantageClient.new(Rails.application.credentials.alphavantage_client[:sandbox_api_key])
    
    begin
      Rails.logger.info "Fetching data for ticker symbol: #{ticker_symbol}"
      
      # Fetch latest price from Alpha Vantage
      latest_price = client.latest_price(ticker_symbol)
      
      if latest_price.present?
        new(ticker: ticker_symbol, last_price: latest_price)
      else
        Rails.logger.warn "No data found for ticker symbol: #{ticker_symbol}"
        nil
      end
    rescue => e
      Rails.logger.error "Error fetching stock data from Alpha Vantage: #{e.message}"
      nil
    end
  end
end
