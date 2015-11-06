class FoodFacilitiesController < ApplicationController
  def index
    @food_facilities = FoodFacility.q(params[:food]) if params[:food]
    
    respond_to do |format|
      format.html
      format.json {render :json => @food_facilities.to_json}
    end
  end



  private
  def food_facility_params
    params.permit(:food)
  end
end
