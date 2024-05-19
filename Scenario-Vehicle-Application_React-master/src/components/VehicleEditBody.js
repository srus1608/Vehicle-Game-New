import React from 'react';
import { Form } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { motion } from "framer-motion/dist/framer-motion";

function VehicleEditBody({name, positionX, positionY, speed, direction, onClose, show, handleSave}) {
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

    const { 
    register, handleSubmit, formState: { errors, dirtyFields } 
    } = useForm({
    defaultValues: {
        vehicleName : name,
        vPositionX : positionX,
        vPositionY : positionY,
        vSpeed : speed,
        vDirection : direction
    }
    });

    const onSubmit = (data) => {
        handleSave(data);
    }
    

    return (

        <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">Edit Vehicle</h2>
                </div>
                <div className="modal-body">

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className='formContainer'>
                        <Form.Field>
                            <label>Vehicle Name</label>
                            <input 
                                placeholder='Vehicle Name' 
                                type="text" 
                                {...register("vehicleName", { 
                                required: true, 
                                pattern: /^[a-zA-Z0-9_/][a-zA-Z0-9_ ]*[a-zA-Z0-9_]$/
                                })}
                            />
                        </Form.Field>
                        {errors.vehicleName && dirtyFields.vehicleName && <p className="error">Name cannot have any special character excep "_"</p>}

                        <Form.Field>
                            <label>Position X</label>
                            <input 
                            placeholder='Position X'
                            type="number" 
                            {...register('vPositionX', {
                                required: true,
                                pattern: /^([1-9]|[1-9][0-9]{1,2}|1[0-3][0-9]{2}|1400)$/ 
                            })}
                            />
                        </Form.Field>
                        {errors.vPositionX && dirtyFields.vPositionX && <p className="error">Value must be in the range 1 and 1400</p>}

                        <Form.Field>
                            <label>Position Y</label>
                            <input 
                            placeholder='Position Y'
                            type="number" 
                            {...register('vPositionY', {
                                required: true,
                                pattern: /^(1[0-9]|[2-9][0-9]|[1-5][0-9]{2}|6[0-8][0-9]|690)$/ 
                            })}
                            />
                        </Form.Field>
                        {errors.vPositionY && dirtyFields.vPositionY && <p className="error">Value must be in the range 10 and 690</p>}

                        <Form.Field>
                            <label>Direction</label>
                            <select 
                            {...register('vDirection', {
                                required: true,
                            })} 
                            >
                            <option value="" disabled defaultValue='Select a direction' hidden>Select a direction</option>
                                {directions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </Form.Field>

                        <Form.Field>
                            <label>Speed</label>
                            <input 
                            placeholder='Speed'
                            type="number" 
                            {...register('vSpeed', {
                                required: true,
                                pattern: /^([1-9]|1[0-9]|20)$/ 
                            })}
                            />
                        </Form.Field>
                        {errors.vSpeed && dirtyFields.vSpeed && <p className="error">Value must be in the range 1 and 20</p>}
                    </div>
                    <div className="modal-footer">
                        <motion.button 
                            className="button blue-btn" 
                            type="submit"
                            whileTap={{scale : 0.9}}
                        >
                            Add
                        </motion.button>

                        <motion.button 
                            className="button red-btn" 
                            onClick={onClose}
                            whileTap={{scale : 0.9}}
                        >
                            Close
                        </motion.button>
                    </div>
                </Form>

                </div>
            </div>
        </div>
    )
}

export default VehicleEditBody