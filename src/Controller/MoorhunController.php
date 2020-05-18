<?php

/**
 * @file
 * Contains class for the main communication for ajax requests.
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/moorhun")
 */
class MoorhunController extends AbstractController
{
  /**
   * @Route("/", name="moorhun_index")
   */
  public function index():Response
  {
    return $this->render('moorhun/index.html.twig');
  }
}
