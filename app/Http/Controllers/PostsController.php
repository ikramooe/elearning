<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Post;
use DB;
use Inertia\Inertia;
class PostsController extends Controller
{
    public function index(){
          $posts = DB('posts')->join('comments','comment.id_statut','posts.id_post')->get();
          return Inertia::render('Feed',[
                'posts'=>$posts
          ]); 
    }
}
