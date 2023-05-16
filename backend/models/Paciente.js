import mongoose, { Schema } from 'mongoose';

const pacienteSchema = new Schema({

  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  edad: {
    type: Number,
    required: true,
  },
  documento: {
    type: Number,
    required: true,
    trim: true
  }

});

const Paciente = mongoose.model('Paciente', pacienteSchema);

export default Paciente;