import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const usuarioSchema = mongoose.Schema({

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
  email: {
    type: String,
    required: true,
    trim: true
  },
  direccion: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  rol: {
    type: String,
    required: true,
    enum: ['doctor', 'administrador']
  },
  especialidad: {
    type: String,
    default: '',
  },
  estado: {
    type: Boolean,
    default: true
  }

}, {
  timestamps: true
});

usuarioSchema.pre('save', async function(next){

  if(!this.isModified("password")){
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

})

usuarioSchema.methods.comprobarPassword = async function(passwordFormulario) {
  return await bcrypt.compare(passwordFormulario, this.password);
}

const User = mongoose.model('Usuario', usuarioSchema);

export default User;