import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion/dist/framer-motion";
import { Form } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

function AddScenarioForm() {
  const appUrl = process.env.REACT_APP_APP_URL;

  const { 
    register, handleSubmit, resetField, formState: { errors, dirtyFields, isValid, isSubmitted, isSubmitSuccessful } 
  } = useForm(
    { defaultValues: { scenarioName: "", scenarioTime: null } }
  );

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`${appUrl}/scenarios`, {
        id: (Math.floor(Math.random() * 1000)).toString(),
        name: data.scenarioName,
        time: data.scenarioTime,
        vehicles: [],
      })
      .then(() => {
        toast.success("Added Successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        resetHandler();
      });
  }

  const resetHandler = (e) => {
    resetField('scenarioName');
    resetField('scenarioTime');
  };

  return (
    <div className="addScenarioContainer">
      <h1 className="info">Add Scenario</h1>

      <Form onSubmit={handleSubmit(onSubmit)} className='scenario'>

          <div className="formContainer">

            {/* alerting of errors */}
            {!isValid && isSubmitted && !isSubmitSuccessful && <p className="error">Please fill out all the fields</p>}

            <Form.Field>
                <label>Scenario Name
                  <input 
                    placeholder='Scenario Name' 
                    type="text" 
                    {...register("scenarioName", { 
                      required: true,
                      pattern: /^[a-zA-Z0-9_/][a-zA-Z0-9_ ]*[a-zA-Z0-9_]$/
                    })}
                  />
                </label>
            </Form.Field>
            {errors.scenarioName && dirtyFields.scenarioName && <p className="error">Name cannot have any special character excep "_"</p>}
            <Form.Field>
                <label>Scenario Duration
                  <input 
                    placeholder='Scenario Duration' 
                    type="number" 
                    {...register("scenarioTime", { 
                      required: true, 
                      pattern: /^([1-9]|10)$/
                    })}
                  />
                </label>
            </Form.Field>
            {errors.scenarioTime && dirtyFields.scenarioTime && <p className="error">Value must be in the range 1 and 10</p>}

            <motion.button 
              className="button blue-btn" 
              type="submit"
              whileTap={{scale : 0.9}}
            >
              Add
            </motion.button>

            <motion.button 
              className="button orange-btn" 
              onClick={resetHandler}
              whileTap={{scale : 0.9}}
            >
              Reset
            </motion.button>
          </div>
      </Form>

    </div>
  );
}

export default AddScenarioForm;
