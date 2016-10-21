'use strict';

/**
 * @ngdoc function
 * @name generadorDeContratosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the generadorDeContratosApp
 */
angular.module('contrato')
  .controller('contratoController', function contratoController() {
    
    

  	this.contrato = {};

  	this.contratoGenerado = function(){

  	var docDefinition = {
  		
  		content: 
  		[
  			{
  				text: this.contrato.nombreLocador + " (D.N.I. Nº "+ this.contrato.documentoLocador +") con domicilio en "+ this.contrato.domicilioLocador +", por una parte, en lo sucesivo denominado como LOCADOR, y por la otra "+ this.contrato.nombreLocatario +" DNI "+ this.contrato.documentoLocatario +", adelante llamado LOCATARIO, convienen en celebrar el presente contrato de LOCACIÓN sujeto a las cláusulas siguientes y a las disposiciones del Código Civil y Comercial.",margin: [0, 20]
  			},
  			{
  				text: "PRIMERA: Destino: EL LOCADOR, cede en locación con al  LOCATARIO, que acepta ocupar en tal carácter el inmueble que se individualiza como vivienda unifamiliar y ubicado en calle "+ this.contrato.domicilioInmueble +". El LOCATARIO se obliga a destinar el inmueble locado para vivienda familiar, no pudiendo ello ser modificado, ni aún en forma temporaria, so pena de solicitarse judicialmente resolución del contrato y el consiguiente desalojo por incumplimiento del mismo.",margin: [0, 20]
  			},
  			{
  				text: "SEGUNDA: Plazo: Las partes acuerdan que el plazo de vigencia de la locación será de "+ this.contrato.cantidadMesesLocacion +". meses a contar del día 1 del mes de  "+ this.contrato.mesInicioContrato +" del año DOS MIL "+ this.contrato.anoInicioContrato +", operando el vencimiento de pleno derecho, sin necesidad de notificación alguna el día "+ this.contrato.diaVencimientoContrato +", fecha en la que el LOCATARIO deberá restituir el inmueble al LOCADOR en el estado previsto en la cláusula cuarta. —",margin: [0, 20]
  			},
  			{
  				text: "TERCERA: Precio: Las partes convienen libremente como precio de la locación la suma de PESOS "+ this.contrato.precioMensual +" mensuales . El mismo será abonado en "+ this.contrato.domicilioDePago +" o donde el locador lo manifieste en el futuro. La mora se producirá de pleno derecho, sin necesidad de notificación ni de interpelación alguna, devengando la suma adeudada por cualquier concepto un interés punitorio diario, equivalente "+ this.contrato.interesPunitorio +", que se calculará hasta el momento de la cancelación total, desde el día 1 del mes impago, para el supuesto del alquiler. En caso de mora, las notificaciones que se cursen, tanto al LOCATARIO como a GARANTES, mediante cartas documento o telegramas colacionados a los domicilios especiales constituidos en el presente, para el caso de que por cualquier causa no sean recibidas por los destinatarios o devueltas al remitente, se darán por notificadas a las partes en la fecha de devolución que figure en el aviso o pieza restituida. Asimismo las partes convienen la vía ejecutiva para el caso de incumplimiento de las sumas establecidas.",margin: [0, 20]
  			},
  			{
  				text: "CUARTA – Inmueble: el LOCATARIO declara que ha visitado el inmueble y comprobado que el mismo se encuentra en perfecto estado de conservación e higiene, muros y techos recién pintados, aberturas en buen estado, desocupado y en funcionamiento todas sus partes, obligándose el LOCATARIO a restituirlo en idénticas condiciones a las de recepción, manifestando que el mismo consta con sus aberturas, cerraduras, llaves, vidrios, pisos, revestimientos, instalaciones eléctricas, de agua fría y caliente, sanitarias con sus artefactos completos, grifería y los siguientes accesorios: cocina, calefón, muebles de cocina de madera, los que se encuentran en perfecto estado y funcionamiento, por lo que serán a su exclusivo cargo todas las reparaciones, reconstrucciones y/o refacciones que fueran menester realizar para el debido cumplimiento de esta obligación, cualquiera fuera la causa, naturaleza o cuantía del deterioro, aunque éstas fueran por fuerza mayor, o hechos de terceros y sin derecho a reembolso alguno a su favor. Al término de la relación contractual, el locatario deberá abonar al LOCADOR los gastos que ocasionen la compra de materiales y gastos de mano de obra para entregar el departamento recién pintado y en excelentes condiciones. Cabe aclarar que ambas partes podrán presentar presupuestos para su comparación y estipular de este modo el costo final que deberá afrontar el LOCATARIO.",margin: [0, 20]
  			},
  			{
  				text: "QUINTA – Obligaciones: Es obligación del  LOCATARIO: a) efectuar la conexión del servicio de energía eléctrica a su nombre y cargo en un plazo no superior a los quince (15) días corridos, a partir de la suscripción del presente, y abonar su suministro hasta la fecha de corte de los servicios al momento de entrega del inmueble al LOCADOR, en el que deberá presentar la correspondiente baja. b) Permitir el ingreso al inmueble al LOCADOR, o a quien éste designe, cuantas veces lo requiera. c) Sufragar por su cuenta y cargo todas las reparaciones, arreglos o entorpecimientos de los servicios sanitarios, cloacales, sus cámaras, instalaciones eléctricas, pluviales, etc., y realizar todas las mejoras de mantenimiento del inmueble que sean necesarias.  d) Abonar las costas judiciales y extrajudiciales que se originen en el incumplimiento de las obligaciones contractuales. e) Respetar las ordenanzas municipales y exigencias de cualquier otra jurisdicción o naturaleza, por lo que asume la responsabilidad por todas las consecuencias que deriven de su inobservancia. f) El LOCATARIO durante la vigencia de este contrato tendrá a su cargo el pago del servicio de agua, y el pago del impuesto inmobiliario provincial y municipal devengado durante la relación locativa, los que se consideran accesorios al precio y podrán ser cobrados por la vía ejecutiva. g) Queda facultado EL LOCADOR  a negarse a recibir el pago del arriendo hasta tanto no se dé cumplimiento a la obligación citada en el apartado F.",margin: [0, 20]
  			},
  			{
  				text: "SEXTA: Prohibiciones: Le está prohibido al LOCATARIO: a) Efectuar alteraciones, modificaciones, mejoras e innovaciones en el bien locado o sus partes, sin consentimiento previo, expreso y por escrito otorgado por EL LOCADOR, quedando las que se introduzcan, consten o no con autorización, a beneficio de la propiedad, sin derecho a exigir al LOCATARIO indemnización, reintegro o devolución alguna (salvo acuerdo en contrario), y sin perjuicio de la facultad del LOCADOR de exigir su remoción para que recupere su estado anterior, a cargo del LOCATARIO. b) Ceder o transferir por cualquier título total o parcialmente los derechos de esta locación, sublocar o prestar, parcial, total o temporariamente o consentir la presencia de terceros en el inmueble, so pena de declarar de pleno derecho la resolución judicial por EL LOCADOR, sin necesidad de requerimiento ni notificación alguna y promover el desalojo del inmueble, con la sola acreditación por éste del incumplimiento a este apartado por el LOCATARIO. c) Mantener (aunque fuera en forma transitoria) elementos que por su naturaleza, impliquen serios peligros para las personas o el bien alquilado. d) Destinar el inmueble a otro destino que el de vivienda familiar.——",margin: [0, 20]
  			},
  			{
  				text: "SÉPTIMA: Garantía: El Sr. "+ this.contrato.nombreGarante +" D.N.I. "+ this.contrato.documentoGarante +", con domicilio en "+ this.contrato.domicilioGarante +" y el Sr. "+ this.contrato.nombreGarante1 +", D.N.I. "+ this.contrato.documentoGarante1 +" con domicilio en calle "+ this.contrato.domicilioGarante1 +", se constituyen en codeudores solidarios, fiadores y principales pagadora, con expresa renuncia a los beneficios de excusión, aviso, división de bienes y cualquier otro beneficio o prerrogativa que la ley pueda reconocerles y respecto a todas las obligaciones emergentes del presente contrato o impuestos por la ley, en especial por el pago de alquiler y sus accesorios, cualquiera fuera su monto y número de mensualidades impagas, toda carga y obligaciones pecuniarias de cualquier origen y naturaleza, importes o sumas punitorias, compensatorias y/o resarcitorias, costas y costos extrajudiciales o judiciales originadas por el incumplimiento del LOCATARIO y demás que se originen en la presente convención. Dicha fianza se extiende como vigente aún después de expirado el plazo contractual de la locación, mientras el LOCATARIO continúe ocupando el inmueble o adeudando cualquier concepto o suma, hasta la efectiva desocupación y entrega del inmueble al LOCADOR y recepción por éste en las condiciones pactadas, cancelación de toda deuda y cumplimiento de todas las obligaciones del   LOCATARIO.",margin: [0, 20]
  			},
  			{
  				text: "OCTAVA: Sustitución de garantía: Las partes acuerdan que es facultad del LOCADOR, el exigir el cambio de la garantía mencionada supra en el caso de fallecimiento o que aquella cayera en insolvencia, convocatoria, quiebra, concurso civil o inhibición personal. En dichos supuestos el LOCATARIO deberá suministrar nueva garantía a satisfacción del LOCADOR y en el plazo de diez días desde su requerimiento por ésta última, considerándose su incumplimiento causal de resolución contractual de pleno derecho y de desalojo.",margin: [0, 20]
  			},
  			{
  				text: "NOVENA: ACCION DE DESALOJO: La falta de pago de dos meses de alquiler consecutivos o de cualquier servicio que grave la propiedad dentro del plazo convenido, dará derecho al LOCADOR a, previos los trámites establecidos por la ley, considerar irrevocablemente rescindido el presente contrato de locación y convenio, pudiendo pedir el desalojo del bien y con derecho a reclamar las pérdidas e intereses que ocasionen el incumplimiento.",margin: [0, 20]
  			},
  			{
  				text: "DÉCIMA: COBRO POR VIA EJECUTIVA: Queda establecido entre las partes y de acuerdo al art. 1208 del Código Civil y Comercial, sus concordantes y correlativos, la vía ejecutiva para el cobro de los alquileres atrasados, en los casos de mora, y para cualquier concepto como tasas, servicios pendientes, etc.",margin: [0, 20]
  			},
  			{
  				text: "UNDÉCIMA: DEVOLUCION DE LLAVES: Si al entregar las llaves y desocupar el inmueble locado se comprobare la existencia de desperfectos, averías y/u obstrucciones imputables al LOCATARIO, éste quedará obligado a satisfacer el importe del alquiler mensual más lo establecido por la cláusula décimo cuarta por todo el tiempo necesario que transcurra, hasta que los desperfectos o deterioros sean reparados. La recepción por parte del LOCADOR del inmueble arrendado, aún sin reserva alguna de su parte, no importará conformidad con el estado del inmueble, por lo que el locatario deberá requerir comprobante de recepción en el que conste expresamente dicha circunstancia para su liberación",margin: [0, 20]
  			},
  			{
  				text: "DÉCIMO SEGUNDA: GASTOS DE SELLADO Y CERTIFICACION DE FIRMAS: Las partes convienen que los gastos de sellado del presente contrato estarán a cargo del LOCATARIO en un cien por cien (100 %) del monto total del contrato.",margin: [0, 20]
  			},
  			{
  				text: "DÉCIMO TERCERA: DEPÓSITO EN GARANTÍA: En garantía de las obligaciones contraídas mediante este contrato, el LOCATARIO da en depósito al LOCADOR la suma de PESOS "+ this.contrato.depositoLocador +" ($). Este importe no podrá computarse a pagos de alquileres atrasados o vigentes, penalidades, cargas u obligaciones debidas por aquel, con la salvedad de lo que ha continuación se conviene. Es en calidad de depósito de garantía y responde en parte o totalmente a los desperfectos, daños o roturas originadas en la propiedad, sus artefactos o accesorios, y que LOCADOR o sus representantes observen cuando el LOCATARIO al finalizar la locación, siempre y cuando de fiel cumplimiento a todas las obligaciones contraídas mediante este contrato, y restituye al inmueble y sus accesorios al término del presente a entera conformidad del LOCADOR.",margin: [0, 20]
  			},
  			{
  				text: "Caso contrario dicha suma quedará en poder de este y sin perjuicio de iniciar acciones judiciales por mayor monto en caso de ser necesaria.",margin: [0, 20]
  			},
  			{
  				text: "DÉCIMO CUARTA: Cláusula penal: Se estipula como cláusula penal, que ante el supuesto de que el LOCATARIO no restituya el inmueble en tiempo y las formas convenidas, otorga derecho al LOCADOR a exigir un valor mensual, por la ocupación indebida, equivalente a la triplicación del alquiler último vigente hasta la recuperación por EL LOCADOR de la disponibilidad material y jurídica del inmueble, no implicando ello tácita reconducción ni prórroga alguna, sin perjuicio del ejercicio de las facultades del artículo siguiente, pudiendo proseguir el cobro por la vía ejecutiva.",margin: [0, 20]
  			},
  			{
  				text: "DÉCIMO QUINTA: Pacto comisorio: Cualquier incumplimiento por parte del  LOCATARIO a las estipulaciones de este contrato, faculta al LOCADOR a declarar resuelto de pleno derecho el contrato de alquiler, exigir el desalojo inmediato y en su consecuencia promover todas las acciones que  le competa en su favor, extrajudiciales, o judiciales, sea de desalojo, cobro de deuda, daños y perjuicios, etc., pactándose que en el supuesto de cobro lo sea por la vía ejecutiva.",margin: [0, 20]
  			},
  			{
  				text: "DÉCIMO SEXTA: el LOCADOR se reserva el derecho de inspeccionar la propiedad o hacerla inspeccionar por terceros a los efectos de comprobar el debido cumplimiento del presente contrato por parte del inquilino; el LOCADOR hará uso de la facultad convenida con la mayor prudencia, notificando al locatario con 48hs. de anticipación. El LOCADOR no se responsabiliza por daños causados por siniestros al locatario, su grupo conviviente y terceros que frecuenten la propiedad. Además el LOCATARIO está obligado a cargar con los gastos de reparación del inmueble y es responsable del daño causado a inmuebles vecinos en caso de incendio, explosión y otro motivo culposo o no, salvo vicios ocultos, como así por robo o tentativa del mismo, tomando a su cargo la reparación o reposición de todos aquellos bienes que resulten total o parcialmente dañados en un plazo no mayor de sesenta días (60) de producido el hecho de que se trate; asimismo tomará el locatario a su cargo la defensa y responsabilidad del locador ante los juicios que se promuevan contra éste por su esta causa. Además está obligado el locatario a respetar las ordenanzas y reglamentaciones de cualquier jurisdicción sobre policía edilicia, higiene urbana, cargando con todas la infracciones a las mismas, no pudiendo tener en la propiedad cosas que pudieran afectar la seguridad de las personas, objetos o instalaciones; debiendo comunicar al locador dentro de las 48 horas de producido cualquier deterioro o daño a la propiedad, cualquiera sea el motivo.",margin: [0, 20]
  			},
  			{
  				text: "DÉCIMO SÉPTIMA: Domicilios legales: las partes acuerdan como domicilio legal, valido a todos los efectos judiciales o extrajudiciales, el siguiente;",margin: [0, 20]
  			},
  			{
  				text: "1.a) EL LOCADOR, b) el LOCATARIO en el inmueble locado y LOS FIADORES en los domicilios anteriormente denunciados, los que subsistirán a todos los fines, aunque el inmueble fuera desocupado, salvo que notificación expresa en contrario",margin: [0, 20]
  			},
  			{
  				text: "DÉCIMO OCTAVA: RESOLUCIÓN ANTICIPADA: De acuerdo a lo establecido en el art. 1221 del Código Civil y Comercial, el contrato puede ser resuelto anticipadamente por el LOCATARIO después de transcurridos los primeros seis meses de contrato, debiendo notificar en forma fehaciente al locador. Si hace uso de la opción resolutoria en el primer año de vigencia de la relación locativa, deberá abonar al LOCADOR, en concepto de indemnización la suma equivalente a un mes y medio de alquiler al momento de desocupar el inmueble y la de un mes si la opción se ejercita transcurrido dicho lapso.",margin: [0, 20]
  			},
  			{
  				text: "DÉCIMO NOVENA: Conforme las partes, previa lectura y ratificación, firman dos ejemplares de un mismo tenor y a un solo efecto, dejando expresamente aclarado que renuncian al fuero federal y/o cualquier otro de excepción que pudiera corresponderles, y se someten a la jurisdicción de los Tribunales Ordinarios de la Ciudad de Cordoba para cualquier cuestión que se plantee entre las mismas.",margin: [0, 20]
  			}
  			
  				
  		]
  	};

  	pdfMake.createPdf(docDefinition).print();
  	
  	}


  


  });

	

  