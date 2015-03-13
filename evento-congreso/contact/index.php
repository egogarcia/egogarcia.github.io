<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"  />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"  />
        <meta name="description" content="Contacta con nosotros para concertar una prueba o compra nuestra App para vuestro congreso o evento"  />
        <meta name="keywords" content="contactar, solicitar, pedir, comprar, enviar, prueba, mensaje, app, Aplicación, preguntar"  />

        <meta name="apple-mobile-web-app-title" content="smatConf."  />
        <meta name="apple-mobile-web-app-capable" content="yes"  />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="HandheldFriendly" content="True">
        <meta name="mobile-web-app-capable" content="yes">

        <meta property="og:title" content="SmartConf. | Contacto" />
        <meta property="og:description" content="Contacta con nosotros para concertar una prueva o compra nuestra App para vuestro congreso o evento">
        <meta property="og:url" content="http://getsmartconf.com/" />
        <meta property="og:site_name" content="smatConf.">
        <meta property="og:image" content="http://getsmartconf.com/assets/img/iphone-1@2x.png" />
        <meta property="og:locale" content="es_ES">
        
        <meta itemprop="name" content="smartConf">
        <meta itemprop="description" content="Contacta con nosotros para concertar una prueva o compra nuestra App para vuestro congreso o evento">
        <meta itemprop="image" content="http://freelancedeveloper.es/assets/img/profile-picture.jpg">
        <link rel="author" href="https://plus.google.com/107839398563835088830">
        <link rel="publisher" href="https://plus.google.com/107839398563835088830">
        <link rel="canonical" href="http://getsmartconf.com/">
        <meta name="google-site-verification" content="sg>TJbPRDKLbcKBvhuF-V9_SPK06EdR_fkk2qAsrVfZA" />
        
        
        
        
        <title>SmartConf. - Contacto</title>

        <!-- CSS -->
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic">
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,300,100,100italic,300italic,400italic,700,700italic">
        <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="../assets/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="../assets/css/animate.css">
        <link rel="stylesheet" href="../assets/css/magnific-popup.css">
        <link rel="stylesheet" href="../assets/ultimate-flat-social-icons/ultm-css/ultm.css">
        <link rel="stylesheet" href="../assets/css/form-elements.css">
        <link rel="stylesheet" href="../assets/css/buttons.css">
        <link rel="stylesheet" href="../assets/css/style.css">
        <link rel="stylesheet" href="../assets/css/media-queries.css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

        <!-- Favicon and touch icons -->
        <link rel="shortcut icon" href="../assets/ico/favicon.png">
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">

    </head>

    <body>
<?php include_once("../assets/analyticstracking.php") ?>
        <!-- Top menu -->
        <?php include '../blocks/menu.php'; ?>
        <!-- Contact us -->
        <div class="contact-container section-container section-container-full-bg" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 contact section-description wow fadeIn">
                        <h2>Contacta con nosotros</h2>
                        <p>
                            Estamos encantados de escuchar y proponer soluciones.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-7 contact-form wow fadeInLeft">
                        <h3>Solicita más información</h3>
                        <form role="form" action="contact.php" method="post">
                            <div class="form-group">
                                <label class="sr-only" for="contact-email">Email</label>
                                <input type="text" name="email" placeholder="Email..." class="contact-email form-control" id="contact-email">
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="contact-phone">Teléfono</label>
                                <input type="text" name="phone" placeholder="Teléfono..." class="contact-phone form-control" id="contact-phone">
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="contact-subject">Sujeto</label>
                                <input type="text" name="subject" placeholder="Sujeto..." class="contact-subject form-control" id="contact-subject">
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="contact-message">Mensaje</label>
                                <textarea name="message" placeholder="Mensaje..." class="contact-message form-control" id="contact-message"></textarea>
                            </div>
                            <button type="submit" class="btn">Enviar Mensaje</button>
                        </form>
                    </div>
                    <div class="col-sm-5 contact-address wow fadeInUp">
                        <h3>Detalles de Contacto</h3>
                        <p><i class="fa fa-map-marker"></i>Palau Firal de Manresa<br>Carrer Castelladral 5-7, 08243, Manresa, Barcelona</p>
                        <p><i class="fa fa-phone"></i>Phone: +34 656 828 020</p>
                        <p><i class="fa fa-envelope"></i>Email: <a href="">info@webyo.es</a></p>
                    </div>
                </div>
            </div>
        </div>
        <?php include '../blocks/footer.php';?>

        <!-- Javascript -->
        <script src="../assets/js/jquery-1.11.1.min.js"></script>
        <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="../assets/js/bootstrap-hover-dropdown.min.js"></script>
        <script src="../assets/js/jquery.backstretch.min.js"></script>
        <script src="../assets/js/wow.min.js"></script>
        <script src="../assets/js/retina-1.1.0.min.js"></script>
        <script src="../assets/js/jquery.magnific-popup.min.js"></script>
        <script src="../assets/twitter/jquery.tweet.min.js"></script>
        <script src="../assets/js/scripts.js"></script>
        <script>
                            $('.contact-container').backstretch("../assets/img/backgrounds/1.jpg");
                            $('.call-to-action-container').backstretch("../assets/img/backgrounds/2.jpg");
        </script>
        <!--[if lt IE 10]>
            <script src="../assets/js/placeholder.js"></script>
        <![endif]-->

    </body>

</html>

