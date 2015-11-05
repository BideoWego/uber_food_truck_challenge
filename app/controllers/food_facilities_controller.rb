class FoodFacilitiesController < ApplicationController
  def index
    if params[:food].empty?
      @food_facilities = FoodFacility.all
    else
      @food_facilities = FoodFacility.q(params[:food])
    end
  end


  private
  def food_facility_params
    params.permit(:food)
  end
end