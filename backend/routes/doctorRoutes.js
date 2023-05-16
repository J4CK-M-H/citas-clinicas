import { Router } from 'express';
import { 
  obtenerConsulta,
  obtenerConsultas,
  obtenerDoctores,
  registrarConsulta 
} from '../controllers/doctorController.js';

const router = Router();

// router.get('/obtener-doctores', obtenerDoctores );
router.post('/registrar-consulta',  registrarConsulta);
router.post('/obtener-consultas/:doctor',  obtenerConsultas);
router.post('/obtener-consulta/:id',  obtenerConsulta);

export default router;

