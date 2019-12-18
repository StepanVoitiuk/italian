<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MailingRepository")
 */
class Mailing
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email_from;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $text;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmailFrom(): ?string
    {
        return $this->email_from;
    }

    public function setEmailFrom(string $email_from): self
    {
        $this->email_from = $email_from;

        return $this;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }
}
