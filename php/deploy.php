<?php

define('AFTER_PULL', '/usr/bin/node ./node_modules/gulp/bin/gulp.js');

if (!empty(AFTER_PULL)) {
    try{
        shell_exec(AFTER_PULL);
    }catch (Exception $e) {
        fputs($file, $e . "\n");
    }
}
