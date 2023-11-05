(function() {
    var _Scene_Map_updateScene = Scene_Map.prototype.updateScene;
    Scene_Map.prototype.updateScene = function() {
        _Scene_Map_updateScene.call(this);
        if (this.isLoadSaveTriggered()) {
            SceneManager.push(Scene_Load);
        }
        if (this.isSaveTriggered()) {
            SceneManager.push(Scene_Save);
        }
    };

    Scene_Map.prototype.isLoadSaveTriggered = function() {
        return Input.isTriggered('altN');
    };
    
    Scene_Map.prototype.isSaveTriggered = function() {
        return Input.isTriggered('altJ');
    };

    Input.keyMapper[78] = 'altN';  // This maps the 'N' key (key code 78) to 'altN'
    Input.keyMapper[74] = 'altJ';  // This maps the 'J' key (key code 74) to 'altJ'

    var _Input__onKeyDown = Input._onKeyDown;
    Input._onKeyDown = function(event) {
        _Input__onKeyDown.call(this, event);
        if (event.altKey && event.keyCode === 78) {  // If 'Alt' and 'N' are pressed...
            this._currentState['altN'] = true;  // ... set 'altN' as triggered
        }
        if (event.altKey && event.keyCode === 74) {  // If 'Alt' and 'J' are pressed...
            this._currentState['altJ'] = true;  // ... set 'altJ' as triggered
        }
    };
})();