const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors= require("cors")

const app = express();
app.use(cors())
app.use(express.json());

// Sequelize connection configuration
const sequelize = new Sequelize('slot_availability', 'root', 'saurabh', {
  host: 'localhost',
  dialect: 'mysql',
});


const Slot = sequelize.define('Slot', {
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startSlot: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endSlot: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});





// Create a new slot
app.post('/slots', async (req, res) => {
	
  const { date, startSlot, endSlot } = req.body;

  try {
 
      const existingSlots = await Slot.findAll({
        where: {
          date,
        },
      });
  
      const overlap = existingSlots.some(slot => (
        (slot.startSlot <= startSlot && slot.endSlot > startSlot) ||
        (slot.startSlot < endSlot && slot.endSlot >= endSlot) ||
        (slot.startSlot > startSlot && slot.endSlot < endSlot)
      ));
  
      if (overlap) {
        res.status(400).json({ message: 'Slot already exists' });
        return;
      }

    const newSlot = await Slot.create({ date, startSlot, endSlot });
    res.json({ message: 'Slot created', slotId: newSlot.id });
  } catch (err) {
    console.error('Error creating slot:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
