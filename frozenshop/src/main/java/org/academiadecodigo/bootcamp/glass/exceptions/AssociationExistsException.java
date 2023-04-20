package org.academiadecodigo.bootcamp.glass.exceptions;


import org.academiadecodigo.bootcamp.glass.errors.ErrorMessage;

/**
 * Thrown to indicate that an association still exists
 */
public class AssociationExistsException extends FrozenShopException {

    /**
     * @see FrozenShopException#FrozenShopException(String)
     */
    public AssociationExistsException() {
        super(ErrorMessage.ASSOCIATION_EXISTS);
    }
}
