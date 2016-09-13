module Json
  class << self
    def response(data, status=:ok)
      {
        json: {
          data: data,
          status: status
        },
        status: status
      }
    end
  end
end
