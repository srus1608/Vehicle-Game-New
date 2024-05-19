import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import './addVehicles.css';
import axios from 'axios';
import { toast } from "react-toastify";
import { motion } from "framer-motion/dist/framer-motion";
import { Form } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

function AddVehiclesForm() {
  const directions = [
    {
      label: "towards",
      value: "towards",
    },
    {
      label: "backwards",
      value: "backwards",
    },
    {
      label: "upwards",
      value: "upwards",
    },
    {
      label: "downwards",
      value: "downwards",
    },
  ];
  const location = useLocation();
  const [scenarios, setScenarios] = useState([]);
  const appUrl = process.env.REACT_APP_APP_URL;
  const defaultScenarioId = location.state ? location.state.id : '';

  console.log(scenarios[0]);

    const { 
      register, handleSubmit, resetField, formState: { errors, dirtyFields, isSubmitted, isSubmitSuccessful } 
    } = useForm({
      defaultValues: {
        vehicleName : '',
        positionX : null,
        positionY : null,
        speed : null,
        direction : ''
      }
    });
    
    useEffect(() => {
        axios.get(`${appUrl}/scenarios`).then((response) => {
            setScenarios(response.data);
          });
    }, []);

    const onSubmit = (data) => {

      let vehicleId = (Math.floor(Math.random()*1000)).toString();
      axios
      .post(`${appUrl}/vehicles`, {
        id: vehicleId,
        name: data.vehicleName,
        speed: data.speed,
        positionX: data.positionX,
        positionY: data.positionY,
        direction: data.direction,
        scenarioId: data.scenarioId
      })
      .then(() => {
        //update parent scenario
        toast.success("Added Successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        })
        resetHandler();
      });
    }

    const resetHandler = () => {
      resetField('scenarioId');
      resetField('vehicleName');
      resetField('positionX');
      resetField('positionY');
      resetField('speed');
      resetField('direction');
    }

    return (
      <div className='addVehiclesContainer'>
        <h2>Add Vehicles</h2>
          <Form onSubmit={handleSubmit(onSubmit)} className='scenario'>

            <div className='formContainer'>

              {isSubmitted && !isSubmitSuccessful && <p className="error">Please fill out all the fields</p>}

              <Form.Field>

                  <label>Scenario
                    <select 
                      {...register("scenarioId", { 
                        required: true
                      })}
                    >
                        <option value="" selected={defaultScenarioId === '' ? true : false} disabled defaultValue='Select a scenario' hidden>Select a scenario</option>
                        {
                          scenarios.map(v => (
                            <option key={v.id}  value={v.id} selected={v.id === defaultScenarioId ? true : false}>{v.name}</option>
                          ))
                        }
                    </select>
                  </label>

              </Form.Field>

              <Form.Field>
                  <label>Vehicle Name
                    <input 
                      placeholder='Vehicle Name' 
                      type="text" 
                      {...register("vehicleName", { 
                        required: true, 
                        pattern: /^[a-zA-Z0-9_/][a-zA-Z0-9_ ]*[a-zA-Z0-9_]$/
                      })}
                    />
                  </label>
              </Form.Field>
              {errors.vehicleName && dirtyFields.vehicleName && <p className="error">Name cannot have any special character excep "_"</p>}

              <Form.Field>
                <label>Position X
                  <input 
                    placeholder='Position X'
                    type="number" 
                    {...register('positionX', {
                      required: true,
                      pattern: /^([1-9]|[1-9][0-9]{1,2}|1[0-3][0-9]{2}|1400)$/ 
                    })}
                  />
                </label>
              </Form.Field>
              {errors.positionX && dirtyFields.positionX && <p className="error">Value must be in the range 1 and 1400</p>}

              <Form.Field>
                <label>Position Y
                  <input 
                    placeholder='Position Y'
                    type="number" 
                    {...register('positionY', {
                      required: true,
                      pattern: /^(1[0-9]|[2-9][0-9]|[1-5][0-9]{2}|6[0-8][0-9]|690)$/ 
                    })}
                  />
                </label>
              </Form.Field>
              {errors.positionY && dirtyFields.positionY && <p className="error">Value must be in the range 10 and 690</p>}

              <Form.Field>
                <label>Direction
                  <select 
                    {...register('direction', {
                      required: true,
                    })} 
                  >
                    <option value="" disabled defaultValue='Select a direction' hidden>Select a direction</option>
                      {directions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                  </select>
                </label>
              </Form.Field>

              <Form.Field>
                <label>Speed
                  <input 
                    placeholder='Speed'
                    type="number" 
                    {...register('speed', {
                      required: true,
                      pattern: /^([1-9]|1[0-9]|20)$/ 
                    })}
                  />
                </label>
              </Form.Field>
              {errors.speed && dirtyFields.speed && <p className="error">Value must be in the range 1 and 20</p>}

              <motion.button className='button blue-btn' type='submit' whileTap={{scale : 0.9}}>Add</motion.button>
              <motion.button className='button orange-btn' onClick={resetHandler} whileTap={{scale : 0.9}}>Reset</motion.button>
          </div>
          </Form>
      </div>
    )
}

export default AddVehiclesForm