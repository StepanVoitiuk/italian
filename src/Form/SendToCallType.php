<?php

namespace App\Form;

use App\Entity\SendToCall;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SendToCallType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('phone_number', TextType::class,[
                'label'=>false,
                'attr' =>[
                    'class' => 'input',
                    'placeholder' => 'Ваш телефон'
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
            'data_class' => SendToCall::class,
        ]);
    }
}
