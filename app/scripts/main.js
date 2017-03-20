console.log('\'Allo \'Allo!');
$(document).ready(function() {
  var renderer = PIXI.autoDetectRenderer(400, 400, {transparent: true});
  $("#addPixi").append(renderer.view);
  var stage = new PIXI.Container();
  var clouds = PIXI.Sprite.fromImage('images/clouds.jpg');
  clouds.anchor.x = 0.5;
  clouds.anchor.y = 0.5;
  clouds.position.x = 200;
  clouds.position.y = 200;
  stage.addChild(clouds);
  render();
  var count = 0;
  function render() {
    var colorMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
    ];
    var filter = new PIXI.filters.ColorMatrixFilter();
    filter.matrix = colorMatrix;
    var newValSat = 0 + Math.sin(count);
    filter.saturate(newValSat, false);
    stage.filters = [filter];
    count += .001;
    requestAnimationFrame(render);

    clouds.rotation += .001;
    renderer.render(stage);
  }


});
