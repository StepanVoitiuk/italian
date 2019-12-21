<?php

namespace App\Controller;

use App\Entity\Mailing;
use App\Entity\SendToCall;
use App\Form\ContactFormType;
use App\Form\SendToCallType;
use App\Repository\MailingRepository;
use App\Repository\SendToCallRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\RouterInterface;
use App\Helper\MailHelper;

class HomeController extends AbstractController
{
    /**
     * @var MailingRepository
     */
    private $mailingRepository;
    /**
     * @var FormFactoryInterface
     */
    private $formFactory;
    /**
     * @var EntityManagerInterface
     */
    private $manager;
    /**
     * @var RouterInterface
     */
    private $router;
    /**
     * @var SendToCallRepository
     */
    private $callRepository;
    /**
     * @var MailHelper
     */
    private $mailHelper;

    public function __construct()
    {
    }


    /**
     * @Route("/", name="home")
     */
    public function index(Request $request, MailingRepository $mailingRepository,
                          FormFactoryInterface $formFactory, EntityManagerInterface $manager,
                          RouterInterface $router, SendToCallRepository $callRepository, MailHelper $mailHelper)
    {
        $this->formFactory = $formFactory;
        $this->mailingRepository = $mailingRepository;
        $this->manager = $manager;
        $this->router = $router;
        $this->callRepository = $callRepository;

        $contact = new Mailing();
        $phone = new SendToCall();
        $form_contact = $this->formFactory->create(ContactFormType::class, $contact);
        $form_contact->handleRequest($request);
        $form_phone = $this->formFactory->create(SendToCallType::class, $phone);
        $form_phone->handleRequest($request);

        if($form_contact->isSubmitted())
        {
            if ($form_contact->isValid()) {
                $this->manager->persist($contact);
                $this->manager->flush();
                $this->addFlash('success-all', 'Ваше повідомлення успішно відправлено');

                $mailHelper->sendEmail($contact->getEmailFrom(), 'Дякуємо за ваше звернення', $contact->getText());

                return $this->redirect($this->router->generate('home'));
            }
            else {
                $this->addFlash('error-all', 'Некоректно заповнені дані');
            }
        }

        if($form_phone->isSubmitted() && $form_phone->isValid())
        {
            $this->manager->persist($phone);
            $this->manager->flush();
            $this->addFlash('success-all', 'Ваше повідомлення успішно відправлено');
            return $this->redirect($this->router->generate('home'));
        }

        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'contact'=> $form_contact->createView(),
            'phone'=>$form_phone->createView()
        ])
        ;
    }
}
