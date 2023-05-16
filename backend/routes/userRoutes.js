import { Router } from 'express';
import { obtenerDoctor, obtenerDoctores } from '../controllers/doctorController.js';

import { 
  autenticar, 
  editarPerfil, 
  historialConsultas, 
  perfil, 
  registrar, 
  registrarDoctor 
} from '../controllers/userController.js';

import checkAuth from '../middlewares/checkAuth.js';

const router = Router();


router.get('/perfil', checkAuth, perfil);
router.post('/autenticar', autenticar);
router.post('/editar-usuario/:id', editarPerfil);
router.post('/registrar-usuario', registrar);
router.post('/registrar-doctor', registrarDoctor);
router.get('/obtener-doctores', checkAuth , obtenerDoctores);
router.get(`/obtener-doctor/:id`, obtenerDoctor);
router.get(`/historial-consultas`, historialConsultas);


export default router;