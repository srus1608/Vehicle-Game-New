import React from 'react'
import { Link } from "react-router-dom";
import { useActivePage } from '../contexts/ActivePageProvider';
import { motion } from "framer-motion/dist/framer-motion";

function ScenarioItemBtn(props) {
  const { setActivePage } = useActivePage();

  return (
    <div className="grid-container all-scenario-header">
        <div className="grid-item">
            <h2 className={props.clsTxt}>All Scenarios</h2>
        </div>
        <div className="grid-item">
            <Link onClick={() => setActivePage('addscenario')} className="button green-btn" to="/addscenario">
            New Scenario
            </Link>
            <Link onClick={() => setActivePage('addvehiclesform')} className="button blue-btn" to="/addvehiclesform">
            Add Vehicles
            </Link>
            <motion.div className={props.cls} onClick={props.delete} whileTap={{scale : 0.9}}>
                Delete All
            </motion.div>
        </div>
    </div>
  )
}

export default ScenarioItemBtn