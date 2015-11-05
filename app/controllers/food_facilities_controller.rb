class FoodFacilitiesController < ApplicationController
  def index
    if params[:food].nil?
      @food_facilities = nil
    else
      @food_facilities = FoodFacility.all
    end
  end


  private
  def food_facility_params
    params.permit(:food)
  end
end
