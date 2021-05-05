# AST (DiSco:ALICE)

This version of the attention swiping task (AST) was forked from [mako017-archive/AST_Development_Paper](https://github.com/mako017-archive/AST_Development_Paper) and adapted for administration in a school study examining math learning from home. The AST was used to get an estimate of sustained attention which could be used as predictor or moderator of success with remote schooling.

Compared to the original version of the AST, the instructions were rewritten to be more appealing and easier to understand for school students. Instructions were administered in a self-paced fashion, allowing all students to read them as many times as needed to understand the task

## Technical Details

The AST was developed as web app and has no special requirements apart from a modern web browser. Results are saved in a MySQL table.

### Installation

1. All files apart from `.gitignore`, `README.md`, and `php/config.template.php` must be copied to the webserver
2. `setup.sql` must be executed to create the database for data colletion
3. In `php/config.php` the credentials (host, user, and password) must be changed
