import mongoose, { Schema } from 'mongoose';

const pacienteSchema = new Schema({

  sintomas: {
    type: String,
    require: true,
    trim: true
  },
  diagnostico: {
    type: String,
    require: true,
    trim: true
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Usuario"
  },
  paciente: {
    type: Schema.Types.ObjectId,
    ref: "Paciente"
  }

}, {
  timestamps: true
});

const Consulta = mongoose.model('Consulta', pacienteSchema);

export default Consulta;