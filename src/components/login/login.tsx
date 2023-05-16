import styles from './login.module.scss';
import classNames from 'classnames';
import { Labels } from '../labels/labels';
import { Input } from '../input/input';
import { Button } from '../button/button';

export interface LoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-logins-and-templates
 */
export const Login = ({ className }: LoginProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <form>
                    <Labels>{'Email address'}</Labels>
                    <br />
                    <Input />
                    <br />
                    <Labels>{'Password'}</Labels>
                    <br />
                    <Input />
                    <button>Submit</button>
                    <br />
                    <Button>Google</Button>
                </form>
                <Button>Facebook</Button>
            </div>
        </div>
    );
};
