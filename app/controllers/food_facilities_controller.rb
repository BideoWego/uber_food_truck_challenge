class FoodFacilitiesController < ApplicationController
  def index
    @food_facilities = FoodFacility.q(params[:q]) if params[:q]

    respond_to do |format|
      format.html
      format.json {render :json => @food_facilities.to_json}
    end
  end



  private
  def food_facility_params
    params.permit(:q)
  end
end
