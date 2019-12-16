<?php

namespace App\Repository;

use App\Entity\BuildingStage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method BuildingStage|null find($id, $lockMode = null, $lockVersion = null)
 * @method BuildingStage|null findOneBy(array $criteria, array $orderBy = null)
 * @method BuildingStage[]    findAll()
 * @method BuildingStage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BuildingStageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BuildingStage::class);
    }

    // /**
    //  * @return BuildingStage[] Returns an array of BuildingStage objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?BuildingStage
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
