var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// setup
    var numTriang = 1500;
    var numVert = numTriang*3;

    var sphereRadius = 250;
    var tRad = 1;

    var group = new THREE.Group();

    for (var i=0; i<numTriang; i++) {
        var center = new THREE.Vector3(
            Math.random() * (1 - (-1)) + (-1),
            Math.random() * (1 - (-1)) + (-1),
            Math.random() * (1 - (-1)) + (-1));


        center.normalize();

        center.multiplyScalar ( 10 );

        var geom = new THREE.Geometry();
        var v1 = new THREE.Vector3(
            center.x + Math.random() * (tRad - (-tRad)) + (-tRad),
            center.y + Math.random() * (tRad - (-tRad)) + (-tRad),
            center.z + Math.random() * (tRad - (-tRad)) + (-tRad)
        );
        var v2 = new THREE.Vector3(
            center.x + Math.random() * (tRad - (-tRad)) + (-tRad),
            center.y + Math.random() * (tRad - (-tRad)) + (-tRad),
            center.z + Math.random() * (tRad - (-tRad)) + (-tRad)
        );
        var v3 = new THREE.Vector3(
            center.x + Math.random() * (tRad - (-tRad)) + (-tRad),
            center.y + Math.random() * (tRad - (-tRad)) + (-tRad),
            center.z + Math.random() * (tRad - (-tRad)) + (-tRad)
        );

        geom.vertices.push( v1 );
        geom.vertices.push( v2 );
        geom.vertices.push( v3 );


        geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
        geom.computeFaceNormals();
        // set color
        var color = new THREE.Color();
        color.setRGB ( Math.random(), 0, 0 );

        var material = new THREE.MeshBasicMaterial( { color } );

        var mesh= new THREE.Mesh( geom, material );

        group.add( mesh );
    }
scene.add(group);

camera.position.z = 20;

var render = function () {
    requestAnimationFrame( render );

    group.rotation.x +=0.001;
    group.rotation.y +=0.001;
    group.rotation.z +=0.001;
    //cube.rotation.x += 0.1;
    //cube.rotation.y += 0.1;

    renderer.render(scene, camera);
};

render();
