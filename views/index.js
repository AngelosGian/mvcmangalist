<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <meta http-equiv="Content-Type" content="nosniff">
    <link rel="stylesheet" href="../public/css/reset.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../public/css/style.css">
    <title>MangaList</title>
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <!-- <li class="nav-item">
                      <a class="nav-link" href="#">Features</a>
                    </li> 
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li>-->
                    <li class="nav-item">
                        <button class="btn btn-outline-success" type="submit">Login</button>
                    </li>
                  </ul>
            </div>
        </nav>
    </header>
    <section class="container-fluid">
        
            <h1 class="display-1 text-center">My Manga List</h1>
          
        <div class="row">
            <div class="col">
                <h2 class="text-center">Title</h2>
            </div>
            <div class="col">
                <h2 class="text-center">Volumes</h2>
            </div>
            <div class="col">
                <h2 class="text-center">Finished/Ongoing</h2>
            </div>
            <div class="col">
                <h2 class="text-center">Delete</h2>
            </div>
        </div>
        <% //for (var i = 0; i < mangalist.length; i++) { %>
            <% //Object.keys(mangalist).forEach( el => {%> 
            <% mangalist.forEach( (el)=> {%> 
        <div class="row manga-table striped" data-id='<%=el._id%>'>
            <!-- <div class="col">
                <p class="text-center"><%= el.title %></p>
            </div>
            <div class="col">
                <p class="text-center">#<%= el.volumes %></p>
            </div>
            <div class="col">
                <p class="text-center"><%= el.completed %></p>
            </div>
            <div class="col ">
                <span  class="btn btn-danger del">Delete</span>
            </div> -->
            <span class="col text-center">
                <%= el.title %>
            </span>
            <span class="col text-center">
                <%= el.volumes %>
            </span>
            <span class="col text-center">
                <%= el.completed %>
            </span>
            <span class="col text-center btn btn-danger del">
                Delete                
            </span>
        </div>
        <% }) %>
    </section> 
    
    <section class="container mt-5">
        <form action="/mangalist" method="POST">
            <div class="row">
                <div class="col-md-3">
                    <input type="text" class="form-control" id="manga-title" name="mangatitle"placeholder="Title">
                </div>
                <div class="col-md-3">

                    <input type="text" class="form-control" id="manga-volumes" name="mangavolumes" placeholder="Volumes">
                </div>
                <div class="col-md-3">
                    <label class="form-check-label"for="manga-completed">

                        <!-- <input type="checkbox" class="form-check-input" id="manga-completed" name="mangacompleted"> -->
                        <select name="mangacompleted" class="form-select" id="manga-completed">
                            <option value="">--choose--</option>
                            <option value="finished">Finished</option>
                            <option value="ongoing">Ongoing</option>
                        </select>
                    </label>
                </div>
                <div class="col-md-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="../public/js/main.js"></script>
</body>
</html>