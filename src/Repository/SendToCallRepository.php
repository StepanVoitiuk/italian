<?php

namespace App\Repository;

use App\Entity\SendToCall;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method SendToCall|null find($id, $lockMode = null, $lockVersion = null)
 * @method SendToCall|null findOneBy(array $criteria, array $orderBy = null)
 * @method SendToCall[]    findAll()
 * @method SendToCall[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SendToCallRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SendToCall::class);
    }

    // /**
    //  * @return SendToCall[] Returns an array of SendToCall objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SendToCall
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
