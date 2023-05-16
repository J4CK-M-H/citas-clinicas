import { Router } from 'express';
import { obtenerPaciente, registrarPaciente } from '../controllers/pacienteController.js';

const router = Router();



router.get('/obtener-paciente/:id', obtenerPaciente );
router.post('/registrar', registrarPaciente );


export default router;

