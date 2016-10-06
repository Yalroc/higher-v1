class AddFitToJobApplications < ActiveRecord::Migration[5.0]
  def change
    add_column :job_applications, :fit, :float
    # I used float because I prioritize speed over hyper-accuracy cf. http://stackoverflow.com/questions/8514167/float-vs-decimal-in-activerecord
  end
end
