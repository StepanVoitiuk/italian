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
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\RouterInterface;
use Twig\Environment;

class HomeController extends AbstractController
{

    /**
     * @var Environment
     */
    private $twig;
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

    public function __construct(Environment $twig, MailingRepository $mailingRepository,
                                FormFactoryInterface $formFactory, EntityManagerInterface $manager,
                                RouterInterface $router, SendToCallRepository $callRepository)
    {
        $this->formFactory = $formFactory;
        $this->twig = $twig;
        $this->mailingRepository = $mailingRepository;
        $this->manager = $manager;
        $this->router = $router;
        $this->callRepository = $callRepository;
    }


    /**
     * @Route("/", name="home")
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function index(Request $request)
    {
        $contact = new Mailing();
        $phone = new SendToCall();
        $form_contact = $this->formFactory->create(ContactFormType::class, $contact);
        $form_contact->handleRequest($request);
        $form_phone = $this->formFactory->create(SendToCallType::class, $phone);
        $form_phone->handleRequest($request);

        if($form_contact->isSubmitted() && $form_contact->isValid())
        {
            $this->manager->persist($contact);
            $this->manager->flush();

            return new RedirectResponse($this->router->generate('home'));
        }

        if($form_phone->isSubmitted() && $form_phone->isValid())
        {
            $this->manager->persist($phone);
            $this->manager->flush();

            return new RedirectResponse($this->router->generate('home'));
        }

        return new Response( $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'contact'=> $form_contact->createView(),
            'phone'=>$form_phone->createView()
        ])
        );
    }
}
