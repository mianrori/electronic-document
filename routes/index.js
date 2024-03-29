import express from "express";
import {
  generateDe,
  _getTiposIndicadoresPresencia,
  _getNaturalezasReceptor,
  _getTiposImpuestos,
  _getTiposOperaciones,
  _getTiposTransacciones,
  _getTiposPago,
  _getCondicionesCredito,
  _getMotivoEmisionNc,
} from "../controllers/index.js";

export const router = express.Router();

router.route("/de/event/generate").post(generateDe);
router.route("/de/tipostransacciones").get(_getTiposTransacciones);
router.route("/de/tiposimpuestos").get(_getTiposImpuestos);
router.route("/de/tiposoperaciones").get(_getTiposOperaciones);
router.route("/de/naturalezasreceptor").get(_getNaturalezasReceptor);
router
  .route("/de/tiposindicadorespresencia")
  .get(_getTiposIndicadoresPresencia);
router.route("/de/tipospago").get(_getTiposPago);
router.route("/de/condicionescredito").get(_getCondicionesCredito);
router.route("/de/motivoemisionnc").get(_getMotivoEmisionNc);

export default router;
