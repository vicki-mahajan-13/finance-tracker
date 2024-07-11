# app/services/alphavantage_client.rb
require 'net/http'
require 'json'

class AlphavantageClient
  ALPHAVANTAGE_BASE_URL = 'https://www.alphavantage.co/query'
  
  def initialize(api_key)
    @api_key = api_key
  end

  def fetch_stock_quote(symbol)
    url = URI("#{ALPHAVANTAGE_BASE_URL}?function=GLOBAL_QUOTE&symbol=#{symbol}&apikey=#{@api_key}")
    response = Net::HTTP.get(url)
    JSON.parse(response)
  end

  def latest_price(symbol)
    quote_data = fetch_stock_quote(symbol)
    if quote_data && quote_data['Global Quote']
      quote_data['Global Quote']['05. price']
    else
      "Failed to retrieve the latest price for #{symbol}"
    end
  end
end
