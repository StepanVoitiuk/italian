<?php

namespace App\Form;

use App\Entity\Mailing;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email_from', EmailType::class, [
                'label' => false,
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Ваша електронна адреса '
                ]
            ])
            ->add('text', TextType::class,[
                'label' => false,
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Ваше запитання'
                ]
            ])
            ->add('Send', SubmitType::class, [
                'label' => 'Надіслати',
                'attr' => [
                    'class' => 'button',
                    'type' => 'submit'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Mailing::class,
        ]);
    }
}
