use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail->setFrom('annavinnik.com', AnnaVinnik);
$mail->addAddress('vinnikannaevgenievna@gmail.com');

$body = 'Hello :)';

$mail->body = $body;

if (!$mail->send()) {
$message = 'Error';
} else {
$message = 'Success';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);