<?php

namespace App\Helper;

use Symfony\Component\DependencyInjection\ContainerInterface;
use App\Entity\User;

class MailHelper
{
    protected $mailer;

    protected $appEmail;
    protected $container;

    public function __construct(\Swift_Mailer $mailer, ContainerInterface $container)
    {
        $this->mailer = $mailer;


        $this->appEmail = 'itali.loc@loc.com';

        $this->container = $container;
    }

    public function sendEmail($user, $body = null, $subject = 'Site', $type = 'text/html')
    {
        $message = new \Swift_Message();

        $message->setSubject($subject)
            ->setFrom($this->appEmail)
            ->setTo(($user instanceof User) ? $user->getEmail() : $user)
            ->setBody($body, $type);
        try {
            $this->mailer->send($message);
        } catch (\Exception $e) {}
    }
}