# from flask import Flask
# app = Flask(__name__)




from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

model_1 = pickle.load(open('architecture_ml_model.pkl', 'rb'))
model_2 = pickle.load(open('architecture_ml_model_attach_bathroom.pkl', 'rb'))
model_3 = pickle.load(open('architecture_ml_model_masterbedroom.pkl', 'rb'))
model_4 = pickle.load(open('architecture_ml_model_attach_bathroom.pkl', 'rb'))
model_5 = pickle.load(open('architecture_ml_model_non_attach_bathroom.pkl', 'rb'))
model_6 = pickle.load(open('architecture_ml_model_Kitchen.pkl', 'rb'))
model_7 = pickle.load(open('architecture_ml_model_Garage.pkl', 'rb'))
model_8 = pickle.load(open('architecture_ml_model_coverproch.pkl', 'rb'))
model_9 = pickle.load(open('architecture_ml_model_Livingroom.pkl', 'rb'))
model_10 = pickle.load(open('architecture_ml_model_verenda.pkl', 'rb'))
model_11 = pickle.load(open('architecture_ml_model_Mudroom.pkl', 'rb'))
model_12 = pickle.load(open('architecture_ml_model_Lundry.pkl', 'rb'))
model_13 = pickle.load(open('architecture_ml_model_greatroom.pkl', 'rb'))



@app.route('/predict_constr_cost',methods=['POST','GET'])
def predictConstrJson():
    print(request.get_json())
    data = request.get_json()
    # total_number_of_compartmenet = float(data.get('total_number_of_compartmenet'))
    no_Bed_Room_Attach = float(data.get('no_Bed_Room_Attach'))
    no_Bed_Room_Non_Attach = float(data.get('no_Bed_Room_Non_Attach'))
    no_Bath_Room_Attach = float(data.get('no_Bath_Room_Attach'))
    no_Bath_Room_Non_Attach = float(data.get('no_Bath_Room_Non_Attach'))
    no_Kitchen = float(data.get('no_Kitchen'))
    no_Garage = float(data.get('no_Garage'))
    no_Covered_Porch = float(data.get('no_Covered_Porch'))
    no_LivingRoom = float(data.get('no_LivingRoom'))
    no_Veranda = float(data.get('no_Veranda'))
    no_MudRoom = float(data.get('no_MudRoom'))
    no_Laundry = float(data.get('no_Laundry'))
    no_GreatRoom = float(data.get('no_GreatRoom'))

    # total_number_of_compartment_prediction = model_1.predict([[total_number_of_compartmenet]])
    value_1 = model_3.predict([[no_Bath_Room_Attach]])
    value_2 = model_3.predict([[no_Bed_Room_Attach]])
    value_3 = model_3.predict([[no_Bed_Room_Non_Attach]])
    value_4 = model_4.predict([[no_Bath_Room_Non_Attach]])
    value_5 = model_5.predict([[no_Kitchen]])
    value_6 = model_6.predict([[no_Garage]])
    value_7 = model_7.predict([[no_Covered_Porch]])
    value_8 = model_8.predict([[no_LivingRoom]])
    value_9 = model_9.predict([[no_Veranda]])
    value_10 = model_10.predict([[no_MudRoom]])
    value_11 = model_11.predict([[no_Laundry]])
    value_12 = model_12.predict([[no_GreatRoom]])

    # print(total_number_of_compartment_prediction)
    print(value_1)
    print(value_2)
    print(value_3)
    print(value_4)
    print(value_5)
    print(value_6)
    print(value_7)
    print(value_8)
    print(value_9)
    print(value_10)
    print(value_11)
    print(value_12)

    # newval = float(total_number_of_compartment_prediction)
    newva1 = float(value_1)
    newva2 = float(value_2)
    newva3 = float(value_3)
    newva4 = float(value_4)
    newva5 = float(value_5)
    newva6 = float(value_6)
    newva7 = float(value_7)
    newva8 = float(value_8)
    newva9 = float(value_9)
    newva10 = float(value_10)
    newva11 = float(value_11)
    newva12 = float(value_12)

    total =  float(newva1+newva2+newva3+value_5+value_6+value_7+value_8+value_9+value_10+value_11+value_12)
    print(total)

    # predicted_value_1 = "{:.2f}".format(newval) 
    predicted_value_0 = "{:.2f}".format(total) 
    predicted_value_1 = "{:.2f}".format(newva1) 
    predicted_value_2 = "{:.2f}".format(newva2) 
    predicted_value_3 = "{:.2f}".format(newva3) 
    predicted_value_4 = "{:.2f}".format(newva4) 
    predicted_value_5 = "{:.2f}".format(newva5) 
    predicted_value_6 = "{:.2f}".format(newva6) 
    predicted_value_7 = "{:.2f}".format(newva7) 
    predicted_value_8 = "{:.2f}".format(newva8) 
    predicted_value_9 = "{:.2f}".format(newva9) 
    predicted_value_10 = "{:.2f}".format(newva10) 
    predicted_value_11 = "{:.2f}".format(newva11) 
    predicted_value_12 = "{:.2f}".format(newva12) 
    # predicted_value_3 = "{:.2f}".format(newva3) 
    
    # return ("val")

    return jsonify(
        # total_prediction  = predicted_value_1,
        total_prediction  = predicted_value_0,
        prediction_of_no_Bath_Room_Attach  = predicted_value_1,
        prediction_of_no_Bed_Room_Attach  = predicted_value_2,
        prediction_of_no_Bed_Room_Non_Attach  = predicted_value_3,
        prediction_of_no_Bath_Room_Non_Attach  = predicted_value_4,
        prediction_of_no_Kitchen  = predicted_value_5,
        prediction_of_no_Garage  = predicted_value_6,
        prediction_of_no_Covered_Porch= predicted_value_7,
        prediction_of_no_LivingRoom= predicted_value_8,
        prediction_of_no_Veranda  = predicted_value_9,
        prediction_of_no_MudRoom  = predicted_value_10,
        prediction_of_no_Laundry  = predicted_value_11,
        prediction_of_no_GreatRoom  = predicted_value_12
        )

